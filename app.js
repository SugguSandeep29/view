sap.ui.define([
    "sap/ui/core/mvc/XMLView"   //class
], function (XMLView) {
    "use strict";

    XMLView.create({             //Method 
        viewName: "new.view.app" //view Name - Parameter
    }).then(function (sandeep) {
        sandeep.placeAt("content");
    })
})

//placeAt - Puts this control into the specified container (oRef) at the given position (oPosition).

//class sap.ui.core.mvc.XMLView-borrowed from (sap.ui.core.Control)

//https://ui5.sap.com/#/api/sap.ui.core.Control%23methods/placeAt