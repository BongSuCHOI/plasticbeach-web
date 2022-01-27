function platformCheck() {
    if (["Win16", "Win32", "Win64", "Mac", "MacIntel"].find((element) => element == navigator.platform)) {
        return true;
    } else {
        return false;
    }
}

export default platformCheck;
