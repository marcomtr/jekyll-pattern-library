var patternLibrary = {

	classes: {
		nav: ".js-style-guide-nav",
		navToggle: ".js-nav-toggle",
		navHeading: ".js-nav-heading",
		subNav: ".js-style-guide-sub-nav",
		sourceCodeTrigger: ".js-source-trigger",
		sourceCodeContainer: ".js-source",
	},

	init: function() {
		patternLibraryClasses = this.classes;
		this.bindUIActions();
	},


	bindUIActions: function() {

		// show and hide navigation on small screens
		$(patternLibraryClasses.navToggle).on('click', function() {
			$(patternLibraryClasses.nav).toggleClass('pl-sidebar-nav--is-visible');
		});

		// collapse and expand navigation areas
		$(patternLibraryClasses.navHeading).on('click', function(e) {

			e.preventDefault();
			
			if ( $(this).next(patternLibraryClasses.subNav).hasClass('pl-sidebar-sub-nav--is-active') ) {
				$(this).next(patternLibraryClasses.subNav).removeClass('pl-sidebar-sub-nav--is-active');
			}
			
			else {
				$(patternLibraryClasses.subNav).removeClass('pl-sidebar-sub-nav--is-active');
				$(this).next(patternLibraryClasses.subNav).addClass('pl-sidebar-sub-nav--is-active');
			}
			
		});

		// source code
		$(patternLibraryClasses.sourceCodeTrigger).on('click', function(e) {
			e.preventDefault();
			$(this).parent().find(patternLibraryClasses.sourceCodeContainer).toggleClass('u-hide');
		});


	}
};

patternLibrary.init();
