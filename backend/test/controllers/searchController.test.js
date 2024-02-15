// const searchController = require('../../src/controllers/searchController');

// // mock isAuthenticated middleware
// const mockIsAuthenticated = jest.fn((req, res, next) => {
//     // just call next to bypass the middleware
//     next();
// });

// // replace the actual isAuthenticated middleware with the mock version
// jest.mock('../../src/authMiddleware/isAuthenticated', () => {
//     return jest.fn().mockImplementation(mockIsAuthenticated);
// });

// describe('POST /search', () => {
//     let req, res;

//     beforeEach(() => {
//         req = {
//             headers: {
//                 authorization: 'TEST_TOKEN'
//             },
//             body: {
//                 businessType: 'restaurant',
//                 distance: 5,
//                 priceRange: '$$'
//             }
//         };
//         res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         };
//     });

//     test('It should return filtered sellers based on criteria', async () => {
//         await searchController.search(req, res);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.json).toHaveBeenCalledWith({
//             sellers: expect.arrayContaining([
//                 expect.objectContaining({
//                     name: 'Seller 1',
//                     type: 'restaurant'
//                 })
//             ])
//         });
//     });

//     test('It should return 404 if no sellers match the criteria', async () => {
//         req.body.businessType = 'non-existing-type';
//         await searchController.search(req, res);
//         expect(res.status).toHaveBeenCalledWith(404);
//         expect(res.json).toHaveBeenCalledWith({
//             message: 'No sellers found matching the criteria.'
//         });
//     });

//     test('It should return 500 if an internal server error occurs', async () => {
//         // simulate an internal server error
//         const errorMessage = 'Internal server error';
//         jest.spyOn(console, 'log').mockImplementation(() => {});
//         jest.spyOn(res, 'status').mockImplementation(() => res);
//         jest.spyOn(res, 'json').mockImplementation(() => {});

//         // mocking the req.body to throw an error
//         req.body = null;

//         await searchController.search(req, res);

//         expect(res.status).toHaveBeenCalledWith(500);
//         expect(res.json).toHaveBeenCalledWith({
//             error: 'Internal server error'
//         });
//     });
// });

const searchController = require('../../src/controllers/searchController');

// Mocking the isAuthenticated middleware
jest.mock('../../src/authMiddleware/isAuthenticated', () => jest.fn());

describe('searchController', () => {
    beforeEach(() => {
        // Clear the mock calls before each test
        jest.clearAllMocks();
    });

    // Test case for successful search
    it('should return filtered sellers when criteria match', async () => {
        // Mock request and response objects
        const req = {
            body: {
                businessType: 'restaurant',
                distance: 5,
                priceRange: '$$'
            }
        };
        const res = {
            status: jest.fn().mockReturnValue(200),
            json: jest.fn()
        };

        // Mock isAuthenticated middleware to return a function that returns true
        const isAuthenticatedMock = require('../../src/authMiddleware/isAuthenticated');
        isAuthenticatedMock.mockImplementation((req, res, next) => {
            searchController.search(req, res); // Call search directly
        });

        // Call the search function
        // await searchController.search(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            sellers: expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    type: 'restaurant',
                    distance: 5,
                    priceRange: '$$',
                    acceptsPiCoin: true
                })
            ])
        });
    });

    // // Test case for no sellers found
    // it('should return 404 when no sellers match the criteria', async () => {
    //     // Mock request and response objects
    //     const req = {
    //         body: {
    //             businessType: 'restaurant',
    //             distance: 1,
    //             priceRange: '$$$$' // Assuming no sellers match this criteria
    //         }
    //     };
    //     const res = {
    //         status: jest.fn().mockReturnThis(),
    //         json: jest.fn()
    //     };

    //     // Mock isAuthenticated middleware to return a function that returns true
    //     const isAuthenticatedMock = require('../../src/authMiddleware/isAuthenticated');
    //     isAuthenticatedMock.mockReturnValue((req, res, next) => {
    //         next();
    //     });

    //     // Call the search function
    //     await searchController.search(req, res);

    //     // Assertions
    //     expect(res.status).toHaveBeenCalledWith(404);
    //     expect(res.json).toHaveBeenCalledWith({
    //         message: "No sellers found matching the criteria."
    //     });
    // });

    // // Add more test cases as needed for error handling, edge cases, etc.
});
