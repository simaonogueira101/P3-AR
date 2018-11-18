AFRAME.registerComponent('markerhandler', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 1 detected.");
                window.location.href = "http://stackoverflow.com";
            } else {
              "Marker 1 not detected."
            }
        });

        // 2
        const animatedMarker2 = document.querySelector("#animated-marker2");
        const aEntity2 = document.querySelector("#model2");

        animatedMarker2.addEventListener('click', function(ev2, target2){
            const intersectedElement2 = ev2 && ev2.detail && ev2.detail.intersectedEl;
            if (aEntity2 && intersectedElement2 === aEntity2) {
                console.log("Marker 2 detected.");
                window.location.href = "http://google.com";
            } else {
              "Marker not detected 2."
            }
        });
}});
