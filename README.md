# &lt;juicy-filedrop&gt;

> Polymer Element with file drop panel

## Demo

[Check it live!](http://Juicy.github.io/juicy-filedrop)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install juicy-filedrop --save
```

Or [download as ZIP](https://github.com/Juicy/juicy-filedrop/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-filedrop/juicy-filedrop.html">
    ```

3. Start using it!

    ```html
    <my-element url="/storage/server/path"></my-element>
    ```

## Options

Attribute      | Options  | Default  | Description
---            | ---      | ---      | ---
`url`          | *string* | ``       | URL to files storage server.
`customheader` | *string* | `x-file` | Name for custom header that contains JSON with file meta data.

## Events

Event           | `event.detail` | Description
---             | --- | ---
`fileUploading` | `{type: "mime/type", name: "file_name.ext"}` | Triggers when uploading starts.
`fileUploaded` | `{type: "mime/type", name: "file_name.ext", status: 200, statusText: "OK", url: "location"}` | Triggers when files was successfully uploaded.
`fileUploadError` | `{type: "mime/type", name: "file_name.ext", status: 500, statusText: "Internal Error", url: ""}` | Triggers when upload fails.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-filedrop/releases).
