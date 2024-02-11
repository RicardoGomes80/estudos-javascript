<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'wordpress_teste' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/B&G1QM}0tqBiZ2X[;P#^z,!IPyP2dQ{|j1zXXCAS]hd3q~a{vK_CopK|m`_)2G3' );
define( 'SECURE_AUTH_KEY',  '(`Tlrw,Y7Px6At=@<W,dMl_||`{eL`PD1*/feQGFis:w6A,=lu#hdg!L5JUGsFFB' );
define( 'LOGGED_IN_KEY',    'i6TZirGk(,eL`1&%Lj[B9DkP4}7Iy_;9|KO}9) 48cgp{1o,8}:t6?rVLCm^9$Ph' );
define( 'NONCE_KEY',        'o$Tr=j``aWuf4Y-q{QF[_{5-^aholD,(T-8u!%-&xEH~IKoJ^u=]q{9KV) .T|ZF' );
define( 'AUTH_SALT',        ' ExwfJ]*R7N$-yz?f<`S4+;j$@3L*NjvGM1j# Q+kV4Uz#cHMw{l):nKzgb,01&]' );
define( 'SECURE_AUTH_SALT', 'UP;ElEgOJ@9ss|*a9L|aIhP4tN54J*Tx@,>){1ebE=!{bClMNRD|LdMR:Gcx(gW-' );
define( 'LOGGED_IN_SALT',   'v{e>y-0u(3v,A=C+fKJIsm#q{{{$ZEe^NC:r{Sbl8D-xZ8^3OIb6diW6WFP[]FOD' );
define( 'NONCE_SALT',       'ePCxA%yb] hWfN^ma:h>xE`*I!NV+C2ZjF$:SPU[0Hk2=#m|Wr^HM!f2:9V/U2?&' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
