const is_username_valid = (username) =>  /^[A-Z]{7}$/.test(username);

console.log(is_username_valid('GUSRINA'));
console.log(is_username_valid('DONA'));

const is_password_valid = (password) =>  /^\d{3}([*]+)\w{3}$/.test(password);

console.log(is_password_valid('rin_333'));
console.log(is_password_valid('333*rin'));
console.log(is_password_valid('3333*rin'));
console.log(is_password_valid('3ds*rin'));
console.log(is_password_valid('333rin'));
