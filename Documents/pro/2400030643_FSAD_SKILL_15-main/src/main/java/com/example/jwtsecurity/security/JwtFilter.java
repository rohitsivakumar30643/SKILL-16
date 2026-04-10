package com.example.jwtsecurity.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

	private final JwtUtil jwtUtil;

	public JwtFilter(JwtUtil jwtUtil) {
		this.jwtUtil = jwtUtil;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		// ✅ SKIP LOGIN ENDPOINT
		if (request.getServletPath().equals("/login")) {
			filterChain.doFilter(request, response);
			return;
		}

		String header = request.getHeader("Authorization");

		if (header != null && header.startsWith("Bearer ")) {

			String token = header.substring(7);

			try {
				String username = jwtUtil.extractUsername(token);
				String role = jwtUtil.extractRole(token);

				var auth = new UsernamePasswordAuthenticationToken(username, null,
						List.of(new SimpleGrantedAuthority(role)));

				SecurityContextHolder.getContext().setAuthentication(auth);

			} catch (Exception e) {
				response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid Token");
				return;
			}
		}

		filterChain.doFilter(request, response);
	}
}