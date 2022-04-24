import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { REGISTER_USER } from '../../src/config/api';

jest.mock('react-native-flash-message', () => "FlashMessageManager");

jest.mock('@react-native-async-storage/async-storage', () => "AsyncStorage");

const registerApi = async (em, password, name) => {
    try {
        return await axios.post(REGISTER_USER, { em, password, name });
    } catch (e) {
        return [];
    }
};

describe('REGISTER_USER', () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });
    describe('when API call is successful', () => {
        it('Register Success', async () => {
            const response = {
                success: true,
                message: 'Register succeed! Please try to login with email sabrinabinr@pmail.com',
                data: {
                    role: 'user',
                    isEmailVerified: true,
                    email: 'olah@gmail.com',
                    name: 'Olah',
                    id: '6250083d22536c7fc7000546',
                },
            };
            mock.onPost(REGISTER_USER).reply(201, response);
            const result = await registerApi('olah@gmail.com', 'olah1234', 'Olah');
            expect(result.data).toEqual(response);
        });
    });

    describe('when API call is unsuccessful', () => {
        it('Register Failed', async () => {
            mock.onPost(REGISTER_USER).reply(400, []);
            const result = await registerApi('olah@gmail.com', 'olah1234', 'Olah');
            expect(result).toEqual([]);
        });
    });
});
