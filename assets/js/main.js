var patternLibrary = {

	classes: {
		section: ".js-section",
		nav: ".js-style-guide-nav",
		sourceTrigger: ".js-source-trigger",
		sourceContainer: ".js-source",
		menuLink: ".pl-sidebar-nav__link"
	},

	init: function() {
		patternLibraryClasses = this.classes;
		this.bindUIActions();
	},


	bindUIActions: function() {

		$(patternLibraryClasses.menuLink).on('click', function(e) {
			e.preventDefault();
			$(this).next('.pl-sidebar-sub-nav').toggleClass('pl-sidebar-sub-nav--is-active');
			
		});

		$(patternLibraryClasses.sourceTrigger).on('click', function(e) {
			e.preventDefault();
			$(this).parent().find(patternLibraryClasses.sourceContainer).toggleClass('u-hide');
		});

	}
};

patternLibrary.init();