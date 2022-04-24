import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LOGIN_USER } from '../../src/config/api';

jest.mock('react-native-flash-message', () => "FlashMessageManager");

jest.mock('@react-native-async-storage/async-storage', () => "AsyncStorage");


const loginApi = async (em, password) => {
    try {
        return await axios.post(LOGIN_USER, { em, password });
    } catch (e) {
        return [];
    }
};

describe('LOGIN_USER', () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe('when API call is successful', () => {
        it('Login Success', async () => {
            const loginSuccess = {
                user: {
                    role: 'user',
                    isEmailVerified: true,
                    email: 'olah@gmail.com',
                    name: 'Olah',
                    id: '6250083d22536c7fc7000546',
                },
            };
            mock.onPost(LOGIN_USER).reply(200, loginSuccess);
            const result = await loginApi('olah@gmail.com', 'olah1234');
            expect(result.data).toEqual(loginSuccess);
        });
    });

    describe('when API call is unsuccessful', () => {
        it('Login failed', async () => {
            mock.onPost(LOGIN_USER).reply(400, []);
            const result = await loginApi('olah@gmail.com', 'olah1234');
            expect(result).toEqual([]);
        });
    });
});
