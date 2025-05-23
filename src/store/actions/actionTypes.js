const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    ADD_USER_FAILED: 'ADD_USER_FAILED',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILED: 'FETCH_USER_FAILED',

    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILED: 'UPDATE_USER_FAILED',

    DELETE_USER_SUCCESS:'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED:'DELETE_USER_FAILED',

    // allcode
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_POSITION_START: 'FETCH_POSITION_START',
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',

    FETCH_ROLE_START: 'FETCH_ROLE_START',
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    FETCH_TIME_SUCCESS: 'FETCH_TIME_SUCCESS',
    FETCH_TIME_FAILED: 'FETCH_TIME_FAILED',


    // doctor
    FETCH_TOP_DOCTOR_SUCCESS:'FETCH_TOP_DOCTOR_SUCCESS',
    FETCH_TOP_DOCTOR_FAILED:'FETCH_TOP_DOCTOR_FAILED',

    FETCH_ALL_DOCTOR_SUCCESS:'FETCH_ALL_DOCTOR_SUCCESS',
    FETCH_ALL_DOCTOR_FAILED:'FETCH_ALL_DOCTOR_FAILED',

    SAVE_DOCTOR_DETAIL_SUCCESS:'SAVE_DOCTOR_DETAIL_SUCCESS',
    SAVE_DOCTOR_DETAIL_FAILED:'SAVE_DOCTOR_DETAIL_FAILED',

    FETCH_DOCTOR_DETAIL_SUCCESS:'FETCH_DOCTOR_DETAIL_SUCCESS',
    FETCH_DOCTOR_DETAIL_FAILED:'FETCH_DOCTOR_DETAIL_FAILED',

    // markdown
    FETCH_MARKDOWN_BY_DOCTOR_SUCCESS: 'FETCH_MARKDOWN_BY_DOCTOR_SUCCESS',
    FETCH_MARKDOWN_BY_DOCTOR_FAILED: 'FETCH_MARKDOWN_BY_DOCTOR_FAILED',

    // schedule
    SAVE_BULK_SCHEDULE_SUCCESS: 'SAVE_BULK_SCHEDULE_SUCCESS',
    SAVE_BULK_SCHEDULE_FAILED: 'SAVE_BULK_SCHEDULE_FAILED',
})

export default actionTypes;