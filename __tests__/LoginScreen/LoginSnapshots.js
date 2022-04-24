import {
    shallow, configure,
} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '../../src/screens/auth/LoginScreen';
import { authReducers, dataReducers } from '../../src/config/api';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-async-storage/async-storage', () => "AsyncStorage");

jest.mock('react-native-share', () => ({
}));

jest.mock('react-native-flash-message', () => "FlashMessageManager");

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('Login Screen test', () => {
    const initialState = {
        dataBooks: dataReducers,
        Auth: authReducers,
    };

    const mockStore = configureStore();
    const store = mockStore(initialState);
    const loginWrapper = shallow(
        <Provider store={store}>
            <Login />
        </Provider>,
    );

    jest.mock('@react-navigation/native', () => ({
        useNavigation: (component) => component,
    }));

    it('should renders `LoginScreen Screen` module correctly', () => {
        expect(loginWrapper).toMatchSnapshot();
    });
    describe('Check component', () => {
        it('should create find `Input`', () => {
            expect(loginWrapper.find('Input').exists());
        });

        it('should create `TouchableOpacity` component', () => {
            expect(loginWrapper.find('TouchableOpacity').exists());
        });
        it('should create `LinkComponent` component', () => {
            expect(loginWrapper.find('LinkComponent').exists());
        });
    });
});
