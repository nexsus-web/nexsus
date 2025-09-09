// users.js
// Semua akun tersimpan di sini
const users = [
  {username:"admin01", password:"admin01", role:"admin", emoji:"👑", pp:"https://via.placeholder.com/100"},
  {username:"user01", password:"user01", role:"user", emoji:"🙂", pp:"https://via.placeholder.com/100"}
];

// Fungsi helper untuk cari user
function findUser(username, password) {
  return users.find(u => u.username === username && u.password === password);
}

// Fungsi tambah user (hanya admin)
function addUser(username, password, emoji="🙂", pp="https://via.placeholder.com/100") {
  users.push({username, password, role:"user", emoji, pp});
}
