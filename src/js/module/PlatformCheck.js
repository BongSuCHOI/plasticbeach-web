function platformCheck() {
    if (["Win16", "Win32", "Win64", "Mac", "MacIntel"].find((element) => element == navigator.platform)) {
        // return true;
        alert('pc')
    } else {
        // return false;
        alert('mobile')
    }
}

export default platformCheck;