import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BOOKS_RECOMMENDED } from '../../src/config/api';

jest.mock('react-native-flash-message', () => "FlashMessageManager");

jest.mock('@react-native-async-storage/async-storage', () => "AsyncStorage");

const getRecommendedApi = async (token, limit) => {
    try {
        return await axios.get(BOOKS_RECOMMENDED, {
            headers: {
                Authorization: `Bearer ${token}`, params: { limit },
            },
        });
    } catch (e) {
        return [];
    }
};

describe('BOOKS_RECOMMENDED', () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe('Get Book Recommended', () => {
        it('should return an object', async () => {
            const response = {
                results: [
                    {
                        title: 'Harry Potter and the Order of the Phoenix',
                        author: 'J. K. Rowling',
                        cover_image: 'https://images-na.ssl-images-amazon.com/images/I/51SfTd37PaL._SX415_BO1,204,203,200_.jpg',
                        id: '6231453513c01e6f8b566ece',
                        publisher: 'Scholastic',
                        average_rating: '8',
                        price: '292532',
                    },
                ],
            };
            mock.onGet(BOOKS_RECOMMENDED).reply(200, response);
            const result = await getRecommendedApi('token', 1);
            expect(result.data).toEqual(response);
        });

        it('should return an empty object', async () => {
            mock.onGet(BOOKS_RECOMMENDED).reply(400, []);
            const result = await getRecommendedApi('token', 1);
            expect(result).toEqual([]);
        });
    });
});
