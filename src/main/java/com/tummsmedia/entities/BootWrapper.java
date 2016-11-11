package com.tummsmedia.entities;

import com.tummsmedia.services.UserRepo;

import javax.persistence.Entity;
import java.util.ArrayList;

/**
 * Created by john.tumminelli on 11/11/16.
 */

public class BootWrapper {
    public ArrayList<Boot> boots;

    public BootWrapper() {
    }

    public BootWrapper(ArrayList<Boot> boots) {
        this.boots = boots;
    }

    public ArrayList<Boot> getBoots() {
        return boots;
    }

    public void setBoots(ArrayList<Boot> boots) {
        this.boots = boots;
    }
}
