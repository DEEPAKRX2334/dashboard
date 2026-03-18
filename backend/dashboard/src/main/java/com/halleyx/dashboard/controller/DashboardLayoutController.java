package com.halleyx.dashboard.controller;

import com.halleyx.dashboard.model.DashboardLayout;
import com.halleyx.dashboard.repository.DashboardLayoutRepository;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/dashboard/layout")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardLayoutController {

    private final DashboardLayoutRepository repository;

    public DashboardLayoutController(DashboardLayoutRepository repository) {
        this.repository = repository;
    }

    // ✅ SAVE LAYOUT
    @PostMapping
    public DashboardLayout saveLayout(@RequestBody DashboardLayout layout) {

        layout.setId(1L); // always single layout
        return repository.save(layout);

    }

    // ✅ GET LAYOUT
    @GetMapping
    public DashboardLayout getLayout() {

        Optional<DashboardLayout> layout = repository.findById(1L);

        return layout.orElse(new DashboardLayout());

    }

}