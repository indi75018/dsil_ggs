var wms_layers = [];

var format_EPCI_PDLL_0 = new ol.format.GeoJSON();
var features_EPCI_PDLL_0 = format_EPCI_PDLL_0.readFeatures(json_EPCI_PDLL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_PDLL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_PDLL_0.addFeatures(features_EPCI_PDLL_0);
var lyr_EPCI_PDLL_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_PDLL_0, 
                style: style_EPCI_PDLL_0,
                interactive: true,
                title: '<img src="styles/legend/EPCI_PDLL_0.png" /> EPCI_PDLL'
            });
var format_Dept_PDLL_1 = new ol.format.GeoJSON();
var features_Dept_PDLL_1 = format_Dept_PDLL_1.readFeatures(json_Dept_PDLL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dept_PDLL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dept_PDLL_1.addFeatures(features_Dept_PDLL_1);
var lyr_Dept_PDLL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dept_PDLL_1, 
                style: style_Dept_PDLL_1,
                interactive: true,
                title: '<img src="styles/legend/Dept_PDLL_1.png" /> Dept_PDLL'
            });
var format_EPCI_projets_2 = new ol.format.GeoJSON();
var features_EPCI_projets_2 = format_EPCI_projets_2.readFeatures(json_EPCI_projets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_projets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_projets_2.addFeatures(features_EPCI_projets_2);
var lyr_EPCI_projets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_projets_2, 
                style: style_EPCI_projets_2,
                interactive: true,
                title: '<img src="styles/legend/EPCI_projets_2.png" /> EPCI_projets'
            });
var format_communes_projets_3 = new ol.format.GeoJSON();
var features_communes_projets_3 = format_communes_projets_3.readFeatures(json_communes_projets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communes_projets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communes_projets_3.addFeatures(features_communes_projets_3);
var lyr_communes_projets_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communes_projets_3, 
                style: style_communes_projets_3,
                interactive: true,
                title: '<img src="styles/legend/communes_projets_3.png" /> communes_projets'
            });
var format_Projets_autres_4 = new ol.format.GeoJSON();
var features_Projets_autres_4 = format_Projets_autres_4.readFeatures(json_Projets_autres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projets_autres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projets_autres_4.addFeatures(features_Projets_autres_4);
var lyr_Projets_autres_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projets_autres_4, 
                style: style_Projets_autres_4,
                interactive: true,
                title: '<img src="styles/legend/Projets_autres_4.png" /> Projets_autres'
            });

lyr_EPCI_PDLL_0.setVisible(true);lyr_Dept_PDLL_1.setVisible(true);lyr_EPCI_projets_2.setVisible(true);lyr_communes_projets_3.setVisible(true);lyr_Projets_autres_4.setVisible(true);
var layersList = [lyr_EPCI_PDLL_0,lyr_Dept_PDLL_1,lyr_EPCI_projets_2,lyr_communes_projets_3,lyr_Projets_autres_4];
lyr_EPCI_PDLL_0.set('fieldAliases', {});
lyr_Dept_PDLL_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_EPCI_projets_2.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Code INSEE': 'Code INSEE', 'Profil': 'Profil', 'Détails': 'Détails', 'Coût': 'Coût', 'M subventi': 'M subventi', 'T subventi': 'T subventi', 'Catégorie': 'Catégorie', });
lyr_communes_projets_3.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Code INSEE': 'Code INSEE', 'Profil': 'Profil', 'Détails': 'Détails', 'Coût ': 'Coût ', 'M subventi': 'M subventi', 'T subventi': 'T subventi', 'Catégorie': 'Catégorie', });
lyr_Projets_autres_4.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'code INSEE': 'code INSEE', 'Profil': 'Profil', 'Détails': 'Détails', 'Coût ': 'Coût ', 'M subventi': 'M subventi', 'T subventi': 'T subventi', 'Catégorie': 'Catégorie', });
lyr_EPCI_PDLL_0.set('fieldImages', {});
lyr_Dept_PDLL_1.set('fieldImages', {'code_insee': 'Hidden', 'nom': 'Hidden', 'nuts3': 'Hidden', 'wikipedia': 'Hidden', 'surf_km2': 'Hidden', });
lyr_EPCI_projets_2.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Code INSEE': 'Hidden', 'Profil': 'TextEdit', 'Détails': 'TextEdit', 'Coût': 'TextEdit', 'M subventi': '', 'T subventi': '', 'Catégorie': 'TextEdit', });
lyr_communes_projets_3.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Code INSEE': 'Hidden', 'Profil': 'TextEdit', 'Détails': 'TextEdit', 'Coût ': 'TextEdit', 'M subventi': '', 'T subventi': '', 'Catégorie': 'TextEdit', });
lyr_Projets_autres_4.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'code INSEE': 'Hidden', 'Profil': 'TextEdit', 'Détails': 'TextEdit', 'Coût ': 'TextEdit', 'M subventi': 'TextEdit', 'T subventi': 'TextEdit', 'Catégorie': 'TextEdit', });
lyr_EPCI_PDLL_0.set('fieldLabels', {});
lyr_Dept_PDLL_1.set('fieldLabels', {});
lyr_EPCI_projets_2.set('fieldLabels', {'Nom': 'inline label', 'Profil': 'inline label', 'Détails': 'inline label', 'Coût': 'inline label', 'M subventi': 'inline label', 'T subventi': 'inline label', 'Catégorie': 'inline label', });
lyr_communes_projets_3.set('fieldLabels', {'Nom': 'inline label', 'Profil': 'inline label', 'Détails': 'inline label', 'Coût ': 'inline label', 'M subventi': 'inline label', 'T subventi': 'inline label', 'Catégorie': 'inline label', });
lyr_Projets_autres_4.set('fieldLabels', {'Nom': 'inline label', 'Profil': 'inline label', 'Détails': 'inline label', 'Coût ': 'inline label', 'M subventi': 'inline label', 'T subventi': 'inline label', 'Catégorie': 'inline label', });
lyr_Projets_autres_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});