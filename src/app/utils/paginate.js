export function paginate(items, pageSize, currentPage) {
    const startCount = (currentPage - 1) * pageSize;
    return [...items].splice(startCount, pageSize);
}
