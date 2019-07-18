//////////////////////////////////////
//                                  //
//  See if Local Storage has Token  //
//                                  //
//////////////////////////////////////

export const hasLocalVar = ( key ) => {
  return localStorage.getItem( key) ? true : false
};


/////////////////////////
//                     //
//  Set Local Storage  //
//                     //
/////////////////////////

export const setLocalStorage = ( key, value ) => {
  localStorage.setItem( key, value );
};

//////////////////////////////////
//                              //
//  Clear Local Storage of key  //
//                              //
//////////////////////////////////

export const clearLocalStorageOf = ( key ) => {
  localStorage.removeItem(key);
};

///////////////////////////////
//                           //
//  Clear All Local Storage  //
//                           //
///////////////////////////////

export const clearAllLocalStorage = () => {
  localStorage.clear();
};