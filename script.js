function validEmail(str: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

// ✅ Valid Emails
console.log(validEmail("user@example.com")); // true
console.log(validEmail("test.user@domain.co.in")); // true

// ❌ Invalid Emails
console.log(validEmail("plainaddress")); // false
console.log(validEmail("user@.com")); // false
console.log(validEmail("invalid@domain,com")); // false
console.log(validEmail("missing@tld.")); // false
console.log(validEmail("   ")); // false