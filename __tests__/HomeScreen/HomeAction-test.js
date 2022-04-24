import ReduxThunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import {
    saveBookPopular, saveBookRecommended, getBooksPopular, getBooksRecommended, setRefresh, setLoading
} from '../../src/config/api';
import { DataBook, dataResults } from './DataBook';

jest.mock('axios');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-flash-message', () => "FlashMessageManager");

jest.mock('@react-native-async-storage/async-storage', () => "AsyncStorage");

function AverageRatingSort(a, b) {
    return parseFloat(b.average_rating) - parseFloat(a.average_rating);
}


describe('Action Test', () => {
    it('Refresh Action Test', () => {
        expect(setRefresh(true)).toEqual({
            type: '@REFRESH',
            payload: true,
        });
    });

    it('Save Book Popular Action Test', () => {
        expect(saveBookPopular([])).toEqual({
            type: '@BOOKS_POPULAR',
            payload: [],
        });
    });

    it('Save Book Recommended Action Test', () => {
        expect(saveBookRecommended([])).toEqual({
            type: '@BOOKS_RECOMMENDED',
            payload: [],
        });
    });

    it('Set Loading Action Test', () => {
        expect(setLoading(true)).toEqual({
            type: '@LOADING',
            payload: true,
        });
    });
});

describe('Get Data Action Test', () => {
    const middlewares = [ReduxThunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({});

    test('should get recommended book ', async () => {
        axios.post.mockImplementation(() => Promise.resolve({
            status: 200,
            data: DataBook,
        }));

        const token = 'testToken';
        const limit = 6;
        const dataSort = dataResults.sort(AverageRatingSort);
        await store.dispatch(getBooksRecommended(token, limit)).then(() => {
            expect(store.getActions()[0]).toEqual(
                setLoading(true),
                saveBookRecommended(dataSort),
            );
        });
    });

    test('should Get Popular book', async () => {
        axios.post.mockImplementation(() => Promise.resolve({
            status: 200,
            data: DataBook,
        }));
        const token = 'testToken';
        let dataSort;

        await store.dispatch(getBooksPopular(token)).then(() => {
            expect(store.getActions()[0]).toEqual(
                setLoading(true),
                dataSort = dataResults.sort(AverageRatingSort),
                saveBookPopular(dataSort),
            );
        });
    });
});
