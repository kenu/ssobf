package com.example.ssobf.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;
import java.util.Arrays;

@RestController
public class UserController {

    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        return Collections.singletonMap("name", principal.getAttribute("name"));
    }

    @GetMapping("/api/sample-data")
    public Map<String, Object> getSampleData() {
        return Map.of(
            "items", Arrays.asList(
                Map.of("id", 1, "name", "Item 0", "description", "Description 1"),
                Map.of("id", 2, "name", "Item 2", "description", "Description 2"),
                Map.of("id", 3, "name", "Item 3", "description", "Description 3")
            )
        );
    }
}
