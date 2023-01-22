export const serviceGroup = (res: any) => {
    const groupServices = res.reduce((acc: any, val: any, i: number) => {
        if (i % 2 === 0) {
            acc.push([val]);
        } else {
            acc[acc.length - 1].push(val);
        }
        return acc;
    }, []);

    return groupServices;
};
