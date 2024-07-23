import os
from time import time
from base64 import urlsafe_b64encode
from binascii import crc32, hexlify, unhexlify
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from msgpack import packb, unpackb
from struct import pack
from base64 import urlsafe_b64decode

key = unhexlify('EEBC1F57487F51921C0465665F8AE6D1658BB26DE6F8A069A3520293A572078F')

def encrypt_request_data(data):
    msg = packb(data)
    iv = get_random_bytes(12)
    cipher = AES.new(key, AES.MODE_GCM, iv)
    encrypted = cipher.encrypt(msg)
    tag = cipher.digest()
    encrypted = hexlify(iv + encrypted + tag)
    return urlsafe_b64encode(unhexlify(encrypted))

def decrypt_response_data(data):
    decoded = unhexlify(data)
    iv = decoded[:12]
    cipher = AES.new(key, AES.MODE_GCM, iv)
    decrypted = cipher.decrypt(decoded[12:])
    return unpackb(decrypted[:-16])

def decrypt_request(data):
    decoded = urlsafe_b64decode(data)
    iv = decoded[:12]
    cipher = AES.new(key, AES.MODE_GCM, iv)
    decrypted = cipher.decrypt(decoded[12:])
    return unpackb(decrypted[:-16])

if __name__ == "__main__":
    request_data = ""
    response_data = ""
    print(decrypt_request(request_data))
    print()
    print(decrypt_response_data(response_data))