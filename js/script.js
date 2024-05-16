
 // use a script tag or an external JS file
/*  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
 }); */

 const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".header",
		start: "top top",
		end: "bottom top",
		scrub: true
	},
});
 gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth);
	tl.to(layer, {y: movement, ease: "none"}, 0);
});

