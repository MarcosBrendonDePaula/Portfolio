ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
	reset: false,
    mobile: false
});

ScrollReveal().reveal(".top_animation", {
	duration: 1300,
	origin: "top",
	distance: "400px",
	easing: "cubic-bezier(0.5, 0, 0, 1)",
	rotate: {
		x: 20,
		z: -10
	},
    mobile: false
});

ScrollReveal().reveal(".left_animation", {
    duration: 1000,
    origin: "left",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    },
    mobile: false
});

ScrollReveal().reveal(".right_animation", {
    duration: 1000,
    origin: "right",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    },
    mobile: false
});
  
ScrollReveal().reveal(".fade_in_animation", {
	duration: 1000,
	move: 0,
    mobile: false
});