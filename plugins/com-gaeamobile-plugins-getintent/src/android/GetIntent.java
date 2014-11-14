package com.gaeamobile.plugins.getintent;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import android.content.Intent;
import android.content.Context;
import android.content.pm.PackageManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.util.Log;


public class GetIntent extends CordovaPlugin {
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Intent intent= this.cordova.getActivity().getIntent();
        String chapter= intent.getStringExtra("chapter");
        if (chapter == null || chapter.trim().equals("")){
            chapter = "0";
        }
        Log.i("IntentTest:Get Chapter", "" + chapter);
        callbackContext.success(chapter);
        return true;
    }
}