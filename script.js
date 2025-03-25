function validEmail(str: string): boolean {
    // Trim spaces
    str = str.trim();

    // Regular Expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the input against the pattern
    return emailPattern.test(str);
}

// ✅ Valid Emails
console.log(validEmail("user@example.com")); // true
console.log(validEmail("hello.world@domain.co.in")); // true

// ❌ Invalid Emails
console.log(validEmail("plainaddress")); // false
console.log(validEmail("user@.com")); // false
console.log(validEmail("invalid@domain,com")); // false
console.log(validEmail("missing@tld.")); // false
console.log(validEmail("   ")); // false
