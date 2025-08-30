passwords = ["password", "password", "password"]
k = 1
 

def getRegistrationStatus(passwords, k):
    # Dictionary to store password counts
    password_count = {}
    result = []
    
    # Process each password one by one
    for password in passwords:
        # Get current count (default = 0 if not present)
        count = password_count.get(password, 0)
        
        # If count < k, accept and increase counter
        if count < k:
            result.append("ACCEPT")
            password_count[password] = count + 1
        else:
            # Already k users have this password
            result.append("REJECT")
    
    return result

print (getRegistrationStatus(passwords, k))
