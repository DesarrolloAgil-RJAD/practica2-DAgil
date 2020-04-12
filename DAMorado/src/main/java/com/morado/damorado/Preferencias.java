/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.morado.damorado;


import java.io.Serializable;
import java.util.ArrayList;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.inject.Named;
import javax.servlet.ServletException;

import javax.servlet.http.HttpServletRequest;


@Named(value = "prefs")
@SessionScoped
public class Preferencias implements Serializable {
    
    public Preferencias() {
        wannaLog=false;
        wannaRegis=false;
    };
    
    private String ActualUsuarioid = "";
    
    private Cliente c;

    private boolean wannaLog;
    
    private boolean wannaRegis;
    
    public Cliente getC() {
        return c;
    }

    public void setC(Cliente c) {
        this.c = c;
    }
    

    public String getActualUsuarioid() {
        return ActualUsuarioid;
    }


    public void setActualUsuarioid(String ActualUsuarioid) {
        this.ActualUsuarioid = ActualUsuarioid;
    }

    public boolean usuarioVacio(){
        return !ActualUsuarioid.equals("");
    }

    public boolean usuario(){
        return ActualUsuarioid.equals("");
    }

    public String logout(){
        ActualUsuarioid="";
        this.wannaRegis=false;
        this.wannaLog=false;        
        return "main1?faces-redirect=true";
    }

    public boolean isWannaLog() {
        return wannaLog && usuario();
    }

    public void setWannaLog(boolean wannaLog) {
        this.wannaLog = wannaLog;
    }

    public boolean isWannaRegis() {
        return wannaRegis && usuario();
    }

    public void setWannaRegis(boolean wannaRegis) {
        this.wannaRegis = wannaRegis;
    }

    public String wantLog(){
        this.wannaLog=true;
        this.wannaRegis=false;
        return "";
    }
    public String wantReg(){
        this.wannaRegis=true;
        this.wannaLog=false;
        return "";
    }
}
