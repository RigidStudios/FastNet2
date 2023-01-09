interface Debug {
    set_debug(x : boolean): void
    __direct_debug(c: any, m: string, l: number, l2: number | undefined): boolean
}

interface FastNet2 {
    // Debug.luau
    set_debug(x : boolean): void
    __direct_debug(c: any, m: string, l: number, l2: number | undefined): boolean
    // init.luau
    IsExist(remoteName: string): boolean
    toBestFormNumber(num: number): number | string
    Get(remoteName: string, waitFor: number): any
    Create(remoteName: string, typeRemote: string): any
    Dsend(): number
    Dreceive(): number
    Wait(): number
    getProvider(toBool: boolean | undefined): any
}

export default FastNet2