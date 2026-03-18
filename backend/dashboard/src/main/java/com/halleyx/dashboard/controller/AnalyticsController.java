package com.halleyx.dashboard.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyticsController {

    @GetMapping("/kpi")
    public Map<String, Object> getKpi(@RequestParam String range) {

        Map<String, Object> data = new HashMap<>();

        data.put("revenue", 540);
        data.put("orders", 6);
        data.put("customers", 3);
        data.put("growth", 12);

        return data;
    }

    @GetMapping("/orders-chart")
    public List<Map<String, Object>> ordersChart(@RequestParam String range) {

        List<Map<String, Object>> data = new ArrayList<>();

        data.add(Map.of("name", "Fiber 300", "value", 2));
        data.add(Map.of("name", "5G Plan", "value", 2));
        data.add(Map.of("name", "Fiber 1Gbps", "value", 2));

        return data;
    }

    @GetMapping("/product-pie")
    public List<Map<String, Object>> productPie(@RequestParam String range) {

        List<Map<String, Object>> data = new ArrayList<>();

        data.add(Map.of("name", "Fiber 300", "value", 2));
        data.add(Map.of("name", "5G Plan", "value", 2));
        data.add(Map.of("name", "Fiber 1Gbps", "value", 2));

        return data;
    }

}