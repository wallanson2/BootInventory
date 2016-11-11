package com.tummsmedia.entities;

import javax.persistence.*;

/**
 * Created by john.tumminelli on 11/11/16.
 */
@Entity
@Table(name = "boots")
public class Boot {
    public enum Style {
        WORK,
        OUTDOORS,
        WESTERN,
        DAILYWEAR
    }


    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String bootName;

    @Column(nullable =false)
    String description;

    @Column(nullable = false)
    Style style;

    @Column(nullable = false)
    double price;

    @ManyToOne
    User user;

    public Boot() {
    }

    public Boot(String bootName, String description, Style style, double price, User user) {
        this.bootName = bootName;
        this.description = description;
        this.style = style;
        this.price = price;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBootName() {
        return bootName;
    }

    public void setBootName(String bootName) {
        this.bootName = bootName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Style getStyle() {
        return style;
    }

    public void setStyle(Style style) {
        this.style = style;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
