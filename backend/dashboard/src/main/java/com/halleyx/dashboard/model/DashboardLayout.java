package com.halleyx.dashboard.model;

import jakarta.persistence.*;

@Entity
public class DashboardLayout {

    @Id
    private Long id;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String layoutJson;

    public DashboardLayout() {}

    public DashboardLayout(String layoutJson) {
        this.layoutJson = layoutJson;
    }

    public Long getId() {
        return id;
    }

    public String getLayoutJson() {
        return layoutJson;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLayoutJson(String layoutJson) {
        this.layoutJson = layoutJson;
    }

}