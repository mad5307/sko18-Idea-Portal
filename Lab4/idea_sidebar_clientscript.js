function ideaSidebarCtrl($location, $scope, $rootScope, $window) {
    /* widget controller */
    var c = this;

    c.$onInit = function() {
        c.selectedFilter = 'all';
    }

    //Submit an idea button to take users to a new page with record producer
    c.submitIdea = function() {
        $location.search({
            id: 'idea_create',
            sys_id: '97948f5bdb47070000e4f5861d96190e'
        });
        //$window.location.href = "/ideas?id=idea_create&table=idea&sys_id=-1";
    };

    //Broadcast event based on filter links. This event is caught in Idea List widget
    c.filterClicked = function(type) {
        c.selectedFilter = type;
        $rootScope.$broadcast('filterClicked', type);
    }

}