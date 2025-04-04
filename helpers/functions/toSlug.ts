const toSlug = (string: string): string => {
  return string
    .toString() // Convert to string
    .normalize('NFD') // Normalize unicode characters
    .replace(/[\u0105]/g, 'a') // ą -> a
    .replace(/[\u0107]/g, 'c') // ć -> c
    .replace(/[\u0119]/g, 'e') // ę -> e
    .replace(/[\u0142]/g, 'l') // ł -> l
    .replace(/[\u0144]/g, 'n') // ń -> n
    .replace(/[\u00f3]/g, 'o') // ó -> o
    .replace(/[\u015b]/g, 's') // ś -> s
    .replace(/[\u017a]/g, 'z') // ź -> z
    .replace(/[\u017c]/g, 'z') // ż -> z
    .replace(/[\u0104]/g, 'A') // Ą -> A
    .replace(/[\u0106]/g, 'C') // Ć -> C
    .replace(/[\u0118]/g, 'E') // Ę -> E
    .replace(/[\u0141]/g, 'L') // Ł -> L
    .replace(/[\u0143]/g, 'N') // Ń -> N
    .replace(/[\u00d3]/g, 'O') // Ó -> O
    .replace(/[\u015a]/g, 'S') // Ś -> S
    .replace(/[\u0179]/g, 'Z') // Ź -> Z
    .replace(/[\u017b]/g, 'Z') // Ż -> Z
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word chars except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
};

export default toSlug;
