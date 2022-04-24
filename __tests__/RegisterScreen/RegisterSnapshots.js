import {
    shallow, configure,
} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { authReducers, dataReducers } from '../../src/config/api';
import Register from '../../src/screens/auth/RegisterScreen';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-flash-message', () => "FlashMessageManager");

jest.mock('@react-native-async-storage/async-storage', () => "AsyncStorage");

jest.mock('react-native-share', () => ({
}));

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('Register Screen test', () => {
    const initialState = {
        dataBooks: dataReducers,
        Auth: authReducers,
    };

    const mockStore = configureStore();
    const store = mockStore(initialState);
    const registerWrapper = shallow(
        <Provider store={store}>
            <Register />
        </Provider>,
    );

    jest.mock('@react-navigation/native', () => ({
        useNavigation: (component) => component,
    }));

    it('should renders `Register Screen` module correctly', () => {
        expect(registerWrapper).toMatchSnapshot();
    });
    describe('Check component', () => {
        it('should create find `Input`', () => {
            expect(registerWrapper.find('Input').exists());
        });

        it('should create `TouchableOpacity` component', () => {
            expect(registerWrapper.find('TouchableOpacity').exists());
        });
        it('should create `LinkComponent` component', () => {
            expect(registerWrapper.find('LinkComponent').exists());
        });
    });
});
