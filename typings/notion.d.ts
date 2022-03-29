declare module "notion" {
  type IdRequest = string | string
  type StringRequest = string
  type TextRequest = string
  type EmojiRequest = string
  type TimeZoneRequest = string
  type SelectColor =
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red"
  type RollupFunction =
    | "count"
    | "count_values"
    | "empty"
    | "not_empty"
    | "unique"
    | "show_unique"
    | "percent_empty"
    | "percent_not_empty"
    | "sum"
    | "average"
    | "median"
    | "min"
    | "max"
    | "range"
    | "earliest_date"
    | "latest_date"
    | "date_range"
    | "checked"
    | "unchecked"
    | "percent_checked"
    | "percent_unchecked"
    | "show_original"
  interface SelectPropertyResponse {
    id: StringRequest
    name: StringRequest
    color: SelectColor
  }
  interface DateResponse {
    start: string
    end: string | null
    time_zone: TimeZoneRequest | null
  }
  interface UserObjectResponse {
    type: "person" | "bot"
    person?: {
      email?: string
    }
    bot?: {
      owner?: {
        type: "user" | "workspace"
        user?: {
          type?: "person"
          person?: {
            email: string
          }
          name?: string | null
          avatar_url?: string | null
          id: IdRequest
          object: "user"
        }
        workspace?: true
      }
    }
    name: string | null
    avatar_url: string | null
    id: IdRequest
    object: "user"
  }
  type PartialUserObjectResponse =
    | UserObjectResponse
    | Pick<UserObjectResponse, "id" | "object">
  interface RichTextItemResponse {
    type: "text" | "mention" | "equation"
    text?: {
      content: string
      link: {
        url: TextRequest
      } | null
    }
    mention?: {
      type: "date" | "link_preview" | "template_mention" | "page" | "database"
      user?: PartialUserObjectResponse
      date?: DateResponse
      link_preview?: {
        url: TextRequest
      }
      template_mention?: {
        type: "template_mention_date" | "template_mention_user"
        template_mention_date?: "today" | "now"
        template_mention_user?: "me"
      }
      page?: {
        id: IdRequest
      }
      database?: {
        id: IdRequest
      }
    }
    equation?: {
      expression: TextRequest
    }
    annotations: {
      bold: boolean
      italic: boolean
      strikethrough: boolean
      underline: boolean
      code: boolean
      color:
        | "default"
        | "gray"
        | "brown"
        | "orange"
        | "yellow"
        | "green"
        | "blue"
        | "purple"
        | "pink"
        | "red"
        | "gray_background"
        | "brown_background"
        | "orange_background"
        | "yellow_background"
        | "green_background"
        | "blue_background"
        | "purple_background"
        | "pink_background"
        | "red_background"
    }
    plain_text: string
    href: string | null
  }

  interface QueryDatabaseResult {
    parent?: {
      type: "database_id" | "page_id" | "workspace"
      database_id?: IdRequest
      page_id?: IdRequest
      workspace?: true
    }
    properties?: Record<
      string,
      {
        id: string
        type:
          | "number"
          | "url"
          | "select"
          | "multi_select"
          | "date"
          | "email"
          | "phone_number"
          | "checkbox"
          | "files"
          | "created_by"
          | "created_time"
          | "last_edited_by"
          | "last_edited_time"
          | "formula"
          | "title"
          | "rich_text"
          | "people"
          | "relation"
          | "rollup"
        number?: number | null
        url?: string | null
        select?: SelectPropertyResponse | null
        multi_select?: Array<SelectPropertyResponse>
        date?: DateResponse | null
        email?: string | null
        phone_number?: string | null
        checkbox?: boolean
        files?: Array<{
          file?: {
            url: string
            expiry_time: string
          }
          external?: {
            url: TextRequest
          }
          name: StringRequest
          type?: "file" | "external"
        }>
        created_by?: PartialUserObjectResponse
        created_time?: string
        last_edited_by?: PartialUserObjectResponse
        last_edited_time?: string
        formula?: {
          type: "string" | "date" | "number" | "boolean"
          string?: string | null
          date?: DateResponse | null
          number?: number | null
          boolean?: boolean | null
        }
        title?: Array<RichTextItemResponse>
        rich_text?: Array<RichTextItemResponse>
        people?: Array<PartialUserObjectResponse>
        relation?: Array<{
          id: string
        }>
        rollup?: {
          type: "number" | "date" | "array"
          number?: number | null
          date?: DateResponse | null
          array?: Array<{
            type: "title" | "rich_text" | "people" | "relation"
            title?: Array<RichTextItemResponse>
            rich_text?: Array<RichTextItemResponse>
            people?: Array<PartialUserObjectResponse>
            relation?: Array<{
              id: string
            }>
          }>
          function: RollupFunction
        }
      }
    >
    object: "page"
    id: string
    icon?: {
      type: "emoji" | "external" | "file"
      emoji: EmojiRequest
      external?: {
        url: TextRequest
      }
      file?: {
        url: string
        expiry_time: string
      }
    }
    cover?: {
      type: "external" | "file"
      external?: {
        url: TextRequest
      }
      file?: {
        url: string
        expiry_time: string
      }
    }
    created_by?: {
      id: IdRequest
      object: "user"
    }
    last_edited_by?: {
      id: IdRequest
      object: "user"
    }
    created_time?: string
    last_edited_time?: string
    archived?: boolean
    url?: string
  }
}
