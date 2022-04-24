import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BOOKS_POPULAR } from '../../src/config/api';

jest.mock('react-native-flash-message', () => "FlashMessageManager");

jest.mock('@react-native-async-storage/async-storage', () => "AsyncStorage");

const getPopularApi = async (token) => {
    try {
        return await axios.get(BOOKS_POPULAR, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (e) {
        return [];
    }
};

describe('GET_BOOKS_API_POPULAR', () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe('getPopularApi', () => {
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
                    }],
            };
            mock.onGet(BOOKS_POPULAR).reply(200, response);
            const result = await getPopularApi('token');
            expect(result.data).toEqual(response);
        });

        it('should return an empty object', async () => {
            mock.onGet(BOOKS_POPULAR).reply(400, []);
            const result = await getPopularApi('token');
            expect(result).toEqual([]);
        });
    });
});
