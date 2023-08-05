// Data manipulation logger
/*
# CREATE NEW RECORD #
Field           Value
-----------     -----------
id          →   1   
table       →   accounts
transaction →   C
description →   {id: "kjkjd0993", data: {}}
doneAt      →   2023-07-01 11:05:03
doneBy      →   adikurniawan@gmail.com

# UPDATE A RECORD #
Field           Value
-----------     -----------
id          →   2   
table       →   accounts
transaction →   U
description →   {id: "kjkjd0993", data: {
               old: {code: "1101", description: "Kas dan Bank"},
               new: {code: "1101", description: "Kas"}}
              }
doneAt      →   2023-07-01 12:10:15
doneBy      →   adikurniawan@gmail.com

# DELETE A RECORD #
Field           Value
-----------     -----------
id          →   3   
table       →   accounts
transaction →   D
description →   {id: lkafhu3971}
doneAt      →   2023-07-01 15:09:01
doneBy      →   adikurniawan@gmail.com

*/
export const logDataManipulation = (
  values: Record<any, any>,
  viewOnConsole?: boolean
): void => {};

// Event logger
/*
# CREATE NEW EVENT RECORD #
Field           Value
-----------     -----------
id              →   1   
classification  →   authenticating user
description     →   {event: "User try to login", userId: "adikurniawan@gmail.com"}
doneAt          →   2023-07-01 11:05:03
doneBy          →   anonymous

# CREATE NEW EVENT RECORD #
Field           Value
-----------     -----------
id              →   2   
classification  →   http req
description     →   {event: "GET", endPoint: "/accounting/transactions"}
doneAt          →   2023-07-01 11:05:03
doneBy          →   adikurniawan@gmail.com

*/
export const logEvent = (
  values: Record<any, any>,
  viewOnConsole?: boolean
): void => {};
