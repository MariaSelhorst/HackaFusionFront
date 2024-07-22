export const roleToNumber = (role:string):number => {
    switch (role) {
        case "STUDENT":
            return 2
        case "INSTRUCTOR":
            return 1
        case "ADMIN":
            return 0
        default:
            return -1
    }
}