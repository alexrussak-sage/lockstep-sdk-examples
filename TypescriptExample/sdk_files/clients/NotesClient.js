/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */
export class NotesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the note with the specified note identifier.  A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id - The unique ID number of the Note to retrieve
     * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No collections are currently available but may be offered in the future
     */
    retrieveNote(id, include) {
        const url = `/api/v1/Notes/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request('get', url, options, null);
    }
    /**
     * Archives the Note with the unique ID specified.  A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id - Note id to be archived
     */
    archiveNote(id) {
        const url = `/api/v1/Notes/${id}`;
        return this.client.request('delete', url, null, null);
    }
    /**
     * Creates one or more notes from the specified array of Note Models
     *
     * A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param body - The array of notes to be created
     */
    createNotes(body) {
        const url = `/api/v1/Notes`;
        return this.client.request('post', url, null, body);
    }
    /**
     * Queries Notes on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param filter - The filter to use to select from the list of available applications, in the [Searchlight query syntax](https://github.com/tspence/csharp-searchlight).
     * @param include - To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order - The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
     * @param pageSize - The page size for results (default 200, maximum of 10,000)
     * @param pageNumber - The page number for results (default 0)
     */
    queryNotes(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Notes/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request('get', url, options, null);
    }
}
//# sourceMappingURL=NotesClient.js.map