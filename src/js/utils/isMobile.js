function isMobile() {
    const mDevice = ["Win16", "Win32", "Win64", "Mac", "MacIntel"];
    const mPlatform = mDevice.find((element) => element === navigator.platform);
    const mViewport = window.matchMedia("(min-width: 1024px)").matches;

    if (mViewport && mPlatform) {
        return false;
    } else {
        return true;
    }
}

export default isMobile;
