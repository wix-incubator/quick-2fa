# quick-2fa

Sick of looking for your phone when it is time to enter two-factor authentication token?

Install:

```sh
$ npm install -g quick-2fa
```

Then save your key to keychain:

```sh
$ quick-2fa --save KEY-NAME YOUR-KEY

Example:
$ quick-2fa --save vpn QWERTYUIOPASDFGH
```
Then whenever you need a token run:

```sh
$ quick-2fa KEY-NAME

Example:
$ quick-2fa vpn
```

This utility will print the token to console and to OS notification and will also put it in your clipboard!

Works on mac, windows and linux!

## Global hotkey

1. Install some hotkey management application such as [BetterTouchTool](https://www.boastr.net/)
2. Define global hotkey which executes: `/usr/local/bin/node /usr/local/bin/quick-2fa KEY-NAME`

Now, whenever you need to enter your two-factor authentication token, press the global hotkey, wait for OS notification to appear, and then just paste (token will already exist automatically in your clipboard). Hell, you can even go crazy and make [BetterTouchTool](https://www.boastr.net/) paste and click the login button for you!

## Retrieving your key

Usually when setting up two-factor authentication, you get a qr code which you should scan with your phone. Try to look into the address of the image which represents that qr code, your key might be encoded in the address. Alternatively, scan the qr code with an app such as [Barcode Scanner](https://play.google.com/store/apps/details?id=com.google.zxing.client.android&hl=en), it will show you the decoded text from the qr code, which should contain your key.

## Stay safe

Remember that now your key which generates two-factor authentication tokens is stored in the keychain on your machine. In order to keep it safe make sure you protect your machine with a strong password for cases where it is stolen or someone gains temporary physical access to it.

Are you compromising security by storing this key in your keychain and by making it possible to generate tokens on your machine? Well, not more than having the same already on your phone. Basically if someone steals your phone he will have the same secret information. Since phones are much easier to steal than computers, the risk using this tool is adding is acceptable.

## Troubleshooting

On mac, make sure you have latest node installed.

On Windows, if you get errors regarding python/msbuild/vcbuild, make sure you have latest node installed. **Only if that doesn't help**, run following command and try to reinstall `quick-2fa`:
```sh
# run in administrator privileged command prompt window 
npm install --global --production windows-build-tools
```

On Linux, you might need to install `gnome-keyring` for this tool to work. See details in [keytar docs](https://github.com/atom/node-keytar#on-linux).
