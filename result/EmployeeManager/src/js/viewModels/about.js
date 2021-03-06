define(['ojs/ojcore', 'knockout', 'jquery', 'my-fullcalendar/loader', 'ojs/ojinputtext', 'ojs/ojcheckboxset', 'ojs/ojformlayout'],
        function (oj, ko, $) {

            function AboutViewModel() {
                var self = this;

                self.selectedDate1 = ko.observable();
                self.selectedDate2 = ko.observable();
                self.selectedDate3 = ko.observable();
                
                self.clickListener = function (event) {
                    if (event.type === 'dayClick') {
                        if (event.detail.id === "calendar1"){
                            self.selectedDate1(event.detail.date);
                        } else if (event.detail.id === "calendar2"){
                            self.selectedDate2(event.detail.date);
                        } else if (event.detail.id === "calendar3") {
                            self.selectedDate3(event.detail.date);
                        }
                    }
                };
                
                self.connected = function () {

                };

                /**
                 * Optional ViewModel method invoked after the View is disconnected from the DOM.
                 */
                self.disconnected = function () {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after transition to the new View is complete.
                 * That includes any possible animation between the old and the new View.
                 */
                self.transitionCompleted = function () {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new AboutViewModel();
        }
);
