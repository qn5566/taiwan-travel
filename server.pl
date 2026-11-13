#!/usr/bin/env perl
use strict;
use warnings;
use IO::Socket::INET;
use File::Basename;
use Cwd 'abs_path';

my $port = 8081;
# 網站檔案已移至根目錄，直接從目前目錄提供服務
my $default_dir = '.';
my $root = abs_path($ENV{WEB_ROOT} || $default_dir);

my $server = IO::Socket::INET->new(
    LocalAddr => '127.0.0.1',
    LocalPort => $port,
    Proto     => 'tcp',
    Listen    => 10,
    Reuse     => 1
) or die "Cannot create server on port $port: $!\n";

print "HTTP Server for 台灣吃喝玩樂 running on http://127.0.0.1:$port/\n";

my %mimes = (
    'html' => 'text/html; charset=utf-8',
    'css'  => 'text/css; charset=utf-8',
    'js'   => 'application/javascript; charset=utf-8',
    'json' => 'application/json; charset=utf-8',
    'png'  => 'image/png',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'svg'  => 'image/svg+xml'
);

while (my $client = $server->accept()) {
    my $req = <$client>;
    next unless $req;
    
    if ($req =~ /^GET\s+([^\s\?]+)/) {
        my $path = $1;
        $path = '/index.html' if $path eq '/' or $path eq '';
        
        my $filepath = "$root$path";
        $filepath =~ s/\.\.//g; # sanitize
        
        if (-f $filepath) {
            my ($ext) = $filepath =~ /\.([^.]+)$/;
            $ext = lc($ext || '');
            my $content_type = $mimes{$ext} || 'application/octet-stream';
            
            if (open my $fh, '<:raw', $filepath) {
                my $content = do { local $/; <$fh> };
                close $fh;
                my $len = length($content);
                
                print $client "HTTP/1.1 200 OK\r\n";
                print $client "Content-Type: $content_type\r\n";
                print $client "Content-Length: $len\r\n";
                print $client "Connection: close\r\n";
                print $client "Access-Control-Allow-Origin: *\r\n\r\n";
                print $client $content;
            } else {
                print $client "HTTP/1.1 500 Internal Error\r\nConnection: close\r\n\r\nCannot read file";
            }
        } else {
            print $client "HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\nFile Not Found";
        }
    }
    close $client;
}

