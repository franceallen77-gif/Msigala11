ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([39.111105, -7.306483, 39.148902, -7.283249]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid ',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Classified__sas_image_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Classified__sas_image<br />\
    <img src="styles/legend/Classified__sas_image_1_0.png" /> builtup area<br />\
    <img src="styles/legend/Classified__sas_image_1_1.png" /> Dense vegitation<br />\
    <img src="styles/legend/Classified__sas_image_1_2.png" /> less vegitation<br />\
    <img src="styles/legend/Classified__sas_image_1_3.png" /> Bare land<br />\
    <img src="styles/legend/Classified__sas_image_1_4.png" /> affected area<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Classified__sas_image_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [39.112772, -7.294730, 39.142035, -7.272602]
        })
    });
var format_111_2 = new ol.format.GeoJSON();
var features_111_2 = format_111_2.readFeatures(json_111_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_111_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_111_2.addFeatures(features_111_2);
var lyr_111_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_111_2, 
                style: style_111_2,
                popuplayertitle: '111',
                interactive: true,
                title: '<img src="styles/legend/111_2.png" /> 111'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Classified__sas_image_1.setVisible(true);lyr_111_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Classified__sas_image_1,lyr_111_2];
lyr_111_2.set('fieldAliases', {'id': 'id', });
lyr_111_2.set('fieldImages', {'id': 'TextEdit', });
lyr_111_2.set('fieldLabels', {'id': 'no label', });
lyr_111_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});