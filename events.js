AFRAME.registerComponent('markerhandler', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#model");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 1 detected.");
                window.location.href = "http://stackoverflow.com";
            } else {
              "Marker 1 not detected."
            }
        });
}});

AFRAME.registerComponent('markerhandler2', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker2");
        const aEntity = document.querySelector("#model2");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 2 detected.");
                window.location.href = "http://stackoverflow.com";
            } else {
              "Marker 2 not detected."
            }
        });
}});

AFRAME.registerComponent('markerhandler3', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker3");
        const aEntity = document.querySelector("#model3");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 3 detected.");
                window.location.href = "http://stackoverflow.com";
            } else {
              "Marker 3 not detected."
            }
        });
}});
