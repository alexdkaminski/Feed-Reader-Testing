/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the
         * URL is not empty.
         */
        it('url is defined and not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        })


        /* Loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name
         * is not empty.
         */
        it('name is defined and not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        })
    });

    describe('Menu', function() {

        /* Ensures the menu element is hidden by default.
         *  You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('changes visibility when the menu icon is clicked', function() {
            const menuButton = $('.menu-icon-link');
            // Click menu button and check if menu is displayed
            menuButton.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // Click menu button again and check if menu is hidden
            menuButton.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         })
    });

    describe('Initial Entries', function() {
        /* Ensures when the loadFeed function is called and
         * completes its work, there is at least a single
         * .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test
         * will require the use of Jasmine's beforeEach and
         * asynchronous done() function.
         */

        // Call the loadFeed function
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        })

        it(' has a single .entry element within the .feed container', function() {
            expect($('.feed > .entry-link > .entry').length).toBeTruthy();
        })
    })

    describe('New Feed Selection', function() {
         /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        let initialFeed, secondFeed;

        // Call the loadFeed function
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                loadFeed(1, function() {
                    secondFeed = $('.feed').html();
                    done();
                })

            })
        })

        it(' changes content when a new feed is loaded', function() {
            expect(initialFeed).not.toEqual(secondFeed);
        })

    })

}());
