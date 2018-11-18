AFRAME.registerComponent('markerhandler', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#model");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 1 detected.");
                window.location.href = "/videos/pages/1.html";
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
                window.location.href = "/videos/pages/2.html";
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
                window.location.href = "/videos/pages/3.html";
            } else {
              "Marker 3 not detected."
            }
        });
}});

AFRAME.registerComponent('markerhandler4', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker4");
        const aEntity = document.querySelector("#model4");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 4 detected.");
                window.location.href = "/videos/pages/4.html";
            } else {
              "Marker 4 not detected."
            }
        });
}});

AFRAME.registerComponent('markerhandler5', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker5");
        const aEntity = document.querySelector("#model5");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 5 detected.");
                window.location.href = "/videos/pages/5.html";
            } else {
              "Marker 5 not detected."
            }
        });
}});

AFRAME.registerComponent('markerhandler6', {
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker6");
        const aEntity = document.querySelector("#model6");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Marker 6 detected.");
                window.location.href = "/videos/pages/6.html";
            } else {
              "Marker 6 not detected."
            }
        });
}});
